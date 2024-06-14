function car_info(manufacturer, model, color="navy blue", ...features): 
Record<string, any> {
    const Car_info: Record<string, any> = {
        Manufacturer: manufacturer,
        Model: model,
        Color: color,
        Features: features
    };
    // Car_info.Color = color;
    // Car_info.feature=features;
    return Car_info;
}
console.log(car_info("Honda","2017","Black","automatic","sound_proof"));
console.log(car_info("Honda","2017","Green","Bullet_proof","sound_proof"));