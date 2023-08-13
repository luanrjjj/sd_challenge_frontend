export const formatDateGeneral = (date: any, utc?:any) => {
    const aux = ((utc === undefined || utc === null) || utc === true) ? new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ) : date;
    const options = {
      day: 'numeric', month: 'numeric', year: 'numeric',
    };
    return aux.toLocaleDateString('pt-BR', options);
  };
