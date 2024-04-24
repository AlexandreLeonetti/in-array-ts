// Define the type for the array parameter
type ArrayType = any[];

// Define the type for the value parameter
type ValueType = any;

// Define the return type of the function
type ReturnType = boolean;

// Rewrite the function using TypeScript syntax
export function inArray(arr: ArrayType, val: ValueType): ReturnType {
 arr = arr || [];
 const len = arr.length;
 let i: number;

 for (i = 0; i < len; i++) {
    if (arr[i] === val) {
      return true;
    }
 }
 return false;
}
