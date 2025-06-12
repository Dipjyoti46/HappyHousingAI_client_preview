import React, { useState } from 'react'
import PropEditFlapPrice from './PropEditFlapPrice'

const PropEditFlat = ({ onFlatClick }) => {
  const [blocks, setBlocks] = useState([{
    name: 'Block 1',
    floors: 9,
    flats: []
  }]);
  const [selectedBlock, setSelectedBlock] = useState('Block 1');
  const [totalFlats, setTotalFlats] = useState('');
  const [flatTypes, setFlatTypes] = useState({
    '1BHK': false,
    '2BHK': false,
    '3BHK': false
  });
  const [isFloorConfigOpen, setIsFloorConfigOpen] = useState(false);
  const [floorConfig, setFloorConfig] = useState({
    totalFloors: 9,
    flatsPerFloor: 4
  });
  const [isFlatPriceModalOpen, setIsFlatPriceModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleAddBlock = () => {
    const newBlockNumber = blocks.length + 1;
    setBlocks([...blocks, {
      name: `Block ${newBlockNumber}`,
      floors: 9,
      flats: []
    }]);
  };

  const handleRemoveBlock = (blockToRemove) => {
    setBlocks(blocks.filter(block => block.name !== blockToRemove));
    if (selectedBlock === blockToRemove) {
      setSelectedBlock(blocks[0]?.name || '');
    }
  };

  const handleAddFloor = (blockName) => {
    setBlocks(blocks.map(block => {
      if (block.name === blockName) {
        return {
          ...block,
          floors: block.floors + 1
        };
      }
      return block;
    }));
  };

  const handleRemoveFloor = (blockName) => {
    setBlocks(blocks.map(block => {
      if (block.name === blockName && block.floors > 1) {
        // Remove flats from the last floor
        const lastFloor = block.floors;
        const lastFloorFlats = block.flats.filter(flat => {
          const floorNumber = parseInt(flat.floor);
          return floorNumber !== lastFloor;
        });
        
        return {
          ...block,
          floors: block.floors - 1,
          flats: lastFloorFlats
        };
      }
      return block;
    }));
  };

  const handleFlatTypeChange = (type) => {
    setFlatTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAddFlatToFloor = (blockName, floor, position) => {
    setBlocks(blocks.map(block => {
      if (block.name === blockName) {
        const flatId = `${String.fromCharCode(64 + floor)}${position}`;
        return {
          ...block,
          flats: [...block.flats, {
            id: flatId,
            number: flatId,
            floor,
            position,
            type: '',
            area: '',
            status: 'available'
          }]
        };
      }
      return block;
    }));
  };

  const handleRemoveFlatFromFloor = (blockName, floor, position) => {
    setBlocks(blocks.map(block => {
      if (block.name === blockName) {
        return {
          ...block,
          flats: block.flats.filter(f => !(f.floor === floor && f.position === position))
        };
      }
      return block;
    }));
  };

  const getFlatAtPosition = (blockName, floor, position) => {
    const block = blocks.find(b => b.name === blockName);
    return block?.flats.find(f => f.floor === floor && f.position === position);
  };

  const getFloorFlats = (blockName, floor) => {
    const block = blocks.find(b => b.name === blockName);
    return block?.flats.filter(f => f.floor === floor) || [];
  };

  const getFlatStatus = (blockName, flatId) => {
    const block = blocks.find(b => b.name === blockName);
    const flat = block?.flats.find(f => f.id === flatId);
    return flat?.status || 'available';
  };

  const getButtonStyle = (status) => {
    const baseStyle = "w-full h-full px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 ease-in-out";
    
    if (status === 'sold') {
      return `${baseStyle} bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-sm
              hover:from-green-100 hover:to-green-200 hover:shadow-md hover:scale-105
              active:scale-95 text-green-800 hover:text-green-900`;
    }
    
    if (status === 'booked') {
      return `${baseStyle} bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-sm
              hover:from-orange-100 hover:to-orange-200 hover:shadow-md hover:scale-105
              active:scale-95 text-orange-800 hover:text-orange-900`;
    }
    
    return `${baseStyle} bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-sm
            hover:from-blue-100 hover:to-blue-200 hover:shadow-md hover:scale-105
            active:scale-95 text-blue-800 hover:text-blue-900`;
  };

  const getFloorLabel = (floorNumber) => {
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = floorNumber % 100;
    return floorNumber + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
  };

  const positions = ['01', '02', '03', '04'];

  const selectedBlockData = blocks.find(block => block.name === selectedBlock);

  const handleFloorConfigChange = (field, value) => {
    setFloorConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const applyFloorConfig = () => {
    setBlocks(blocks.map(block => {
      if (block.name === selectedBlock) {
        // Remove flats that are beyond the new flatsPerFloor limit
        const updatedFlats = block.flats.filter(flat => {
          const position = parseInt(flat.position);
          return position <= floorConfig.flatsPerFloor;
        });
        
        return {
          ...block,
          floors: floorConfig.totalFloors,
          flats: updatedFlats
        };
      }
      return block;
    }));
    setIsFloorConfigOpen(false);
  };

  // Generate positions array based on configured flats per floor
  const getPositions = () => {
    return Array.from({ length: floorConfig.flatsPerFloor }, (_, i) => 
      String(i + 1).padStart(2, '0')
    );
  };

  const handleFlatClick = (flatId, blockName) => {
    setSelectedFlat(flatId);
    setIsFlatPriceModalOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Flats Details</h2>
      
      {/* Block Selection */}
      <div className="mb-6">
        <div className="p-2 md:p-5 overflow-x-auto w-full">
          <table className="table-auto w-full bg-blue-300 text-white">
            <tbody>
              <tr>
                {blocks.map((block, index) => (
                  <td key={index} className="p-1 md:p-3">
                    <div className="relative group">
                      <button
                        className={`text-black transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full h-full font-bold rounded-xl border-2 border-black p-2 md:p-4 cursor-pointer text-sm md:text-base ${
                          selectedBlock === block.name ? 'bg-green-400' : 'bg-white/80'
                        }`}
                        onClick={() => setSelectedBlock(block.name)}
                      >
                        {block.name}
                      </button>
                      <button
                        onClick={() => handleRemoveBlock(block.name)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                        title="Delete Block"
                      >
                        ×
                      </button>
                    </div>
                  </td>
                ))}
                <td className="p-1 md:p-3">
                  <button
                    onClick={handleAddBlock}
                    className="transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full h-full bg-white/80 text-black font-bold rounded-xl border-2 border-black p-2 md:p-4 hover:bg-green-400 cursor-pointer text-sm md:text-base"
                  >
                    + Add Block
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Flats Grid */}
      <div className="p-2 md:p-5 overflow-x-auto w-full">
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <div className="flex flex-col w-full items-center justify-center h-auto bg-blue-900 pt-2 pb-2">
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-2xl md:text-3xl text-white">{selectedBlock}</h1>
            </div>
            {selectedBlock && (
              <div className="mt-4 w-full max-w-3xl px-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Floor Configuration</span>
                  </div>
                  <button
                    onClick={() => setIsFloorConfigOpen(!isFloorConfigOpen)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    {isFloorConfigOpen ? (
                      <>
                        <span>Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Configure</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
                
                {isFloorConfigOpen && (
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Total Floors
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="1"
                            max="100"
                            value={floorConfig.totalFloors}
                            onChange={(e) => handleFloorConfigChange('totalFloors', parseInt(e.target.value))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/50" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Flats per Floor
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={floorConfig.flatsPerFloor}
                            onChange={(e) => handleFloorConfigChange('flatsPerFloor', parseInt(e.target.value))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/50" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={applyFloorConfig}
                        className="flex items-center gap-2 bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-white/90 transition-all duration-200 font-medium"
                      >
                        <span>Apply Changes</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <table className="min-w-max w-full border-collapse bg-white text-gray-800">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 md:py-4 px-3 md:px-6 text-left">FLOOR</th>
                <th className="py-2 md:py-4 px-3 md:px-6 text-center" colSpan={floorConfig.flatsPerFloor}>
                  <div className="flex items-center justify-center">
                    <span className="text-lg font-semibold">FLATS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: selectedBlockData?.floors || 0 }, (_, i) => i + 1).map((floor) => (
                <tr key={floor} className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">
                    {getFloorLabel(floor)}
                  </th>
                  {getPositions().map((pos) => {
                    const flat = getFlatAtPosition(selectedBlock, floor, pos);
                    const flatId = `${String.fromCharCode(64 + floor)}${pos}`;
                    
                    return (
                      <td key={pos} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                        {flat ? (
                          <div className="relative group">
                            <button
                              onClick={() => handleFlatClick(flatId, selectedBlock)}
                              className={getButtonStyle(flat.status)}
                            >
                              {flatId}
                            </button>
                            <button
                              onClick={() => handleRemoveFlatFromFloor(selectedBlock, floor, pos)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 text-sm"
                              title="Remove Flat"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddFlatToFloor(selectedBlock, floor, pos)}
                            className="w-full h-full px-4 py-2 text-sm md:text-base font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                          >
                            +
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Flat Price Modal */}
      {isFlatPriceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <PropEditFlapPrice 
            toggleFlatPrice={() => setIsFlatPriceModalOpen(false)}
            flatNumber={selectedFlat}
          />
        </div>
      )}
    </div>
  )
}

export default PropEditFlat
