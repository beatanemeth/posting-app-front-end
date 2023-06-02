export function formatDate(date) {
    return (
        new Date(date).toLocaleDateString('en-gb', { year: "numeric", month: "short", day: "numeric" })
    );
}