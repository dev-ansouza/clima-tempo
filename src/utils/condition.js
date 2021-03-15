export function condition(condition){
    switch(condition){
        case 'cloudly_night':
            return icon = {
                name: 'cloud',
                color: '#848484'
            };
            break;
        case 'cloudly_day':
            return icon = {
                name: 'cloud',
                color: '#848484'
            };
            break;
        case 'clear_night':
            return icon = {
                name: 'md-cloud-night-outline',
                color: '#848484'
            };
            break;
        case 'clear_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#848484'
            };
            break;
        case 'storm':
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            };
            break;
        case 'clear_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#FFB300'
            };
            break;
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#a1a8ab'
            };
            break;
        default: 
        return icon = {
            name: 'cloud-outline',
            color: '#FFF'
        }
    }
}