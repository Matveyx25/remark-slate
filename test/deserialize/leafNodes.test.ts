import { deserialize } from '../../src';

it('Deserialize a complex leaf node with bold and italic', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'bold',
          children: [
            {
              type: 'italic',
              children: [
                {
                  value: 'bold and italic',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with italic and bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'italic',
          children: [
            {
              type: 'bold',
              children: [
                {
                  value: 'italic and bold',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with delete and bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              type: 'bold',
              children: [
                {
                  value: 'strikethrough and bold',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a complex leaf node with delete and italic', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              type: 'italic',
              children: [
                {
                  value: 'strikethrough and italic',
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just italic', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'italic',
          children: [
            {
              value: 'Italic text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just bold', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'bold',
          children: [
            {
              value: 'bold text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with just strikethrough', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'delete',
          children: [
            {
              value: 'strikethrough text',
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Deserialize a leaf node with inline code directly inline', () => {
  expect(
    deserialize({
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'inline code',
        },
      ],
    })
  ).toMatchSnapshot();
});

it('Handles cases where leafs have metadata attached', () => {
  expect(
    deserialize({
      type: 'link',
      url: 'https://jackhanford.com',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'bold',
              children: [
                {
                  type: 'italic',
                  children: [
                    {
                      type: 'delete',
                      children: [
                        {
                          value: 'strikethrough text',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  ).toMatchSnapshot();
});
