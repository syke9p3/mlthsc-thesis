export const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
}