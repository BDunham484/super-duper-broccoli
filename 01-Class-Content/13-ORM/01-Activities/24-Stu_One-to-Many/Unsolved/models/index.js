const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'Cascade',
})

module.exports = { Reader, Book, LibraryCard };
