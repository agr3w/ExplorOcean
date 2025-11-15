export function generateHandlers(interestPoints, handleOpenDetails) {
    const handlers = {};
    interestPoints.forEach(point => {
        handlers[point.onClick] = () => handleOpenDetails(point.details);
    });
    return handlers;
}