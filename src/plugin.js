module.exports = host => {
  host.owner.options.addDeclaration({
    help: 'Readme TOC',
    name: 'readmeToc',
    type: 4 // Mixed (no conversion)
  });
};