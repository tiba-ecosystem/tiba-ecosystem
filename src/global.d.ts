export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type StringStateSetter = React.Dispatch<React.SetStateAction<string>>;
  type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>;
}
