import fs from'fs/promises'

//write file
export const WriteFile = async (req, res) => {
    try {

      const date = new Date().toISOString().replace(/[:.]|\.\d{3}/g, '-');
  
      const filename = `${date}.txt`;
  
      const content = new Date().toLocaleString();
      await fs.writeFile(`./times/${filename}`, content, 'utf-8');
  
      res.status(200).json({
        message: `Created file: ${filename}`,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  };



//readfile
export const ReadFiles = async (req, res) => {
    try {
      const filenames = await fs.readdir('./times');
      const files = [];

      for (const filename of filenames) {
        const content = await fs.readFile(`./times/${filename}`, 'utf-8');
  
        files.push({
          filename,
          content,
        });
      }
      res.status(200).json({ files });

    } catch (error) {

      res.status(500).json({ error });
    }
  };


