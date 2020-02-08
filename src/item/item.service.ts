import { Injectable } from '@nestjs/common';
import { AddUpdateItemDto } from '../model/dto/item.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from '../model/interface/item.interface';

@Injectable()
export class ItemService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {

    }

    async getAllItems(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async getItemById(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async createItem(itemDto: AddUpdateItemDto): Promise<Item> {
        return await this.itemModel.create(itemDto);
    }

    async updateItem(id: string, itemDto: AddUpdateItemDto): Promise<Item> {

        return await this.itemModel.findOneAndUpdate(id, itemDto, { new: true });
    }

    async deleteItemById(id: string): Promise<Item> {
        return await this.itemModel.findOneAndDelete(id);
    }
}
