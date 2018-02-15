const styles = theme => ({
  progress: {
    color: '#D9663F',
    margin: `0 ${theme.spacing.unit * 2}px`,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  listRoot: {
    boxSizing: 'border-box',
    padding: [[theme.spacing.unit, theme.spacing.unit * 2]],
    margin: [[0, 'auto']],
    minHeight: 'calc(100vh - 64px)',
    position: 'relative',
    paddingTop: 72,
    backgroundColor: '#eee',
  },
  mapRoot: {
    boxSizing: 'border-box',
    padding: 0,
    margin: [[0, 'auto']],
    minHeight: 'calc(100vh - 64px)',
    position: 'relative',
    paddingTop: 64,
    backgroundColor: '#eee',
  },
});

export default styles;
