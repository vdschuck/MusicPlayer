module.exports = {
  getCreatedAtGreaterThan(date) {
    let query = {
      createdAt: {
        $gte: date,
      }
    }
    return query;
  }
};