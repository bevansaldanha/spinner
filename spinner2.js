const spinnerStrings = ['|','/','-','\\','|','/','-','\\','|','\n'];
for (let i = 0; i < spinnerStrings.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r'+spinnerStrings[i]);
  }, 100*(i+1));
}