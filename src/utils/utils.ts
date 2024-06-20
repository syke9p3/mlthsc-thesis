export const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
}

export const labelTocolor = (label: string, probability?: number): string => {

    let color = ''

    switch (label) {
        case 'Age':
            color = '#EF4444';
            break;
        case 'Gender':
            color = '#F97316';
            break;
        case 'Physical':
            color = '#FEB019';
            break;
        case 'Race':
            color = '#14B8A6';
            break;
        case 'Religion':
            color = '#2563EB';
            break;
        case 'Others':
            color = '#4B5563';
            break;
        default:
            color = '';
            break;
    }

    return color;
}
