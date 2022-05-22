// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }

/**
 * @Date: 2022/5/22
 * https://segmentfault.com/q/1010000039668041?utm_source=sf-similar-question
 */
declare module '*.vue' {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>
  export default Component;
}