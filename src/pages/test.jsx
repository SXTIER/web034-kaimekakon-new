// #สำหรับทดลองเท่านั้นนน

export default function CustomComponent() {
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {/* บรรทัดที่ 1 */}
      <h1 className="font-bold text-center text-xl">หัวข้อหลัก</h1>

      {/* บรรทัดที่ 2 */}
      <p className="text-center text-gray-600">คำอธิบายสั้นๆ ของหัวข้อ</p>

      {/* บรรทัดที่ 3 */}
      <div className="flex justify-center space-x-2">
        {[...Array(7)].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/33x33?text=${index + 1}`}
            alt={`icon-${index + 1}`}
            className="w-[33.41px] h-[33.41px] object-cover"
          />
        ))}
      </div>

      {/* บรรทัดที่ 4 */}
      <h2 className="font-bold text-center text-lg">หัวข้อรอง 1</h2>

      {/* บรรทัดที่ 5* /}
        <h2 className="font-bold text-center text-lg">หัวข้อรอง 2</h2>
  
        {/* บรรทัดที่ 6 */}
      <p className="text-center text-gray-600">คำอธิบายเพิ่มเติมของหัวข้อรอง</p>
      {/* กลุ่ม 3 กลุ่มในแถวเดียวกัน */}
      <div className="flex flex-row justify-center space-x-6 mt-6">
        {[...Array(3)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-col items-center text-center space-y-2 max-w-[150px]"
          >
            {/* ซ้อนภาพ 2 รูป */}
            <div className="relative w-[33.41px] h-[33.41px]">
              <img
                src={`https://via.placeholder.com/33x33?text=A${groupIndex + 1
                  }`}
                alt={`group-${groupIndex + 1}-img1`}
                className="absolute w-[33.41px] h-[33.41px] object-cover z-10"
              />
              <img
                src={`https://via.placeholder.com/33x33?text=B${groupIndex + 1
                  }`}
                alt={`group-${groupIndex + 1}-img2`}
                className="absolute w-[33.41px] h-[33.41px] object-cover left-2 top-2 z-0"
              />
            </div>
            {/* หัวข้อ */}
            <h3 className="font-bold text-sm">หัวข้อย่อย {groupIndex + 1}</h3>
            <h3 className="font-bold text-sm">หัวข้อรอง {groupIndex + 1}</h3>
            {/* คำอธิบาย */}
            <p className="text-gray-600 text-xs">
              คำอธิบายบรรทัดที่ 1<br />
              คำอธิบายบรรทัดที่ 2<br />
              คำอธิบายบรรทัดที่ 3
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
