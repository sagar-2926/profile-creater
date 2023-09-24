export const saveListToLocalStorage = (tasks) => {
    localStorage.setItem('tasklist', JSON.stringify(tasks));
  }
