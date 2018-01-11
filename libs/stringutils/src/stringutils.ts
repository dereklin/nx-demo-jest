export function parseHostPath(pathname: string) {
    return pathname.replace(/\/[^\/]*$/, '/');
}
