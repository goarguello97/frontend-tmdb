// Función para cambiar el titulo en la pestaña del navegador

export const TabTitle = (newTitle: string) => {
  return (document.title = newTitle);
};
