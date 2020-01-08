module.exports = {
  getDateDeacreasedBy(date, days) {
    let dateCopied = new Date(date.getTime());
    let dateAdjusted = dateCopied.getDate() - days;
    dateCopied.setDate(dateAdjusted);

    return dateCopied;
  }
};