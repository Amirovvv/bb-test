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