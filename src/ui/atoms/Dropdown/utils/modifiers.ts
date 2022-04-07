interface FnProps {
  state: {
    styles: { popper: { minWidth: number; maxWidth: number } }
    rects: { reference: { width: number } }
  }
}

const modifiers = [
  {
    enabled: true,
    name: 'minWidth',
    phase: 'write',
    fn: (data: FnProps) => {
      const {
        state: {
          rects: {
            reference: { width }
          }
        }
      } = data

      data.state.styles.popper.minWidth = width
    }
  }
]

export default modifiers
