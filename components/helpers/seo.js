const DEFAULT = {
  title: 'findMe.travel',
  description: ''
};

export const buildMetas = ({
  title = DEFAULT.title,
  description = DEFAULT.description
}) => ({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description }
  ]
});
