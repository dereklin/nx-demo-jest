export const parseHostPath = pathname => {
    return pathname.replace(/\/[^\/]*$/, '/');
};
