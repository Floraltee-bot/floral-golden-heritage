import Image from "next/image";

const TopHeader = () => {
  return (
    <div className="bg-white py-2 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    
        <div className="flex items-center space-x-3">
          <Image src="/image/logoghs.jpg" alt="School Logo" width={60} height={60} />
          <h1 className="text-lg font-bold text-emerald-600 uppercase">Floral Golden Heritage School</h1>
        </div>

        
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-8 text-sm text-emerald-500">
          <div>
            <span className="font-semibold">EMAIL:</span> heritagetek@gmail.com
          </div>
          <div>
            <span className="font-semibold">PHONE:</span> 08023123730, 08166016790
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
