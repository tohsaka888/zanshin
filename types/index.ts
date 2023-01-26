import { Object3DNode, MaterialNode } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { ShaderMaterial } from "three";

export type ScreenSizeProps = {
  width: number;
  height: number;
};

export type ScreenSizeList = "xs" | "sm" | "md" | "lg" | "xl";

export type FatLineProps = {
  curve: any;
  width?: string | number;
  color: string;
};

export type FirefliesProps = {
  count: number;
  colors: string[];
  radius: number;
};

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
    layerMaterial: MaterialNode<ShaderMaterial, typeof ShaderMaterial>
  }
}
