import { Component } from "vue";

export interface NavItemType {
  id: number;
  title: string;
  url: string;
  icon: Component;
}

export interface filterItemType {
  id: number;
  name: string;
  param: string;
}

export interface inputPropsType {
  btnIcon: boolean;
  btnPlaceholder: string;
  btnType: string
}

export interface ProductItemType {
  id: number;
  image: string;
  name: string;
  isPaid: boolean;
  description: string;
  price: number;
  priceOne: number;
  quantity: number;
  salesman: string;
  location: string;
  selling: 'Аукцион' | 'Разовое предложение';
  type: string;
}