import { promises as fs } from 'fs';

const texto = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, accusantium veritatis. Placeat modi debitis ipsa sint, odit voluptatibus? Expedita quia, non aspernatur illum doloremque consectetur laborum molestias earum fugiat aliquid natus deleniti dolorem neque et perferendis repellendus ducimus. Voluptatibus, omnis!';

export async function wFile() {
  try {
    await fs.writeFile('novoarquivo.txt', texto);
    const data = await fs.readFile('novoarquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// export default { wFile };