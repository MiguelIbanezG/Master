import { Door } from "./door";
import { Light } from "./lights";
import { Fan } from "./ventilator";
import { RoomWindow } from "./window";

export interface Room {
    id: number;
    name: string;
    size: number;
    co2: number;
    temperature: number;
    people: number;
    doors: Door[];
    windows: RoomWindow[];
    lights: Light[];
    fans: Fan[];
  }
  