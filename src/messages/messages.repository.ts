import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.js', 'utf8');

    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {}

  async create(message: string) {}
}
