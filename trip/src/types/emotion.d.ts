// theme 타입 설정
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {
    colors: {
      primary: string;
      gray: {
        [key: number]: string;
      };
    };
  }
}
