let height = 165;
let expectWeight;
let maxWeight;
let minWeight;

if(height > 100) {
    height = height - 100;
    expectWeight = height * 9 / 10;
    maxWeight = height;
    minWeight = height * 8 / 10;
    console.log(`Cân nặng lý tưởng: ${maxWeight}. Cân nặng tối đa: ${maxWeight}. Cân nặng tối thiểu: ${minWeight}`);
} else {
    console.log("chiều cao không hợp lệ")
}