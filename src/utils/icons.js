const iconModules = import.meta.glob('../stratagem_icons/**/*.svg', { eager: true, query: '?url', import: 'default' });

export function getIconUrl(iconPath) {
    const key = `../stratagem_icons/${iconPath}`;
    return iconModules[key];
}
