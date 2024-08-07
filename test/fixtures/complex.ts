export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Heading one',
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 14, offset: 13 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 14, offset: 13 },
        indent: [],
      },
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Slate POC',
          position: {
            start: { line: 3, column: 4, offset: 18 },
            end: { line: 3, column: 13, offset: 27 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 3, column: 1, offset: 15 },
        end: { line: 3, column: 13, offset: 27 },
        indent: [],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value:
            "Slate is interesting, hopefully it'll work better than react-rte so we can have a better text editor. Some of the ",
          position: {
            start: { line: 5, column: 1, offset: 29 },
            end: { line: 5, column: 115, offset: 143 },
            indent: [],
          },
        },
        {
          type: 'italic',
          children: [
            {
              type: 'text',
              value: 'benefits',
              position: {
                start: { line: 5, column: 116, offset: 144 },
                end: { line: 5, column: 124, offset: 152 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 5, column: 115, offset: 143 },
            end: { line: 5, column: 125, offset: 153 },
            indent: [],
          },
        },
        {
          type: 'text',
          value: ' of slate are:',
          position: {
            start: { line: 5, column: 125, offset: 153 },
            end: { line: 5, column: 139, offset: 167 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 5, column: 1, offset: 29 },
        end: { line: 5, column: 139, offset: 167 },
        indent: [],
      },
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Total control over how everything works',
                  position: {
                    start: { line: 7, column: 4, offset: 172 },
                    end: { line: 7, column: 43, offset: 211 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 7, column: 4, offset: 172 },
                end: { line: 7, column: 43, offset: 211 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 7, column: 1, offset: 169 },
            end: { line: 7, column: 43, offset: 211 },
            indent: [],
          },
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value:
                    'Near AST level API where you can control the editor / content',
                  position: {
                    start: { line: 8, column: 4, offset: 215 },
                    end: { line: 8, column: 65, offset: 276 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 8, column: 4, offset: 215 },
                end: { line: 8, column: 65, offset: 276 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 8, column: 1, offset: 212 },
            end: { line: 8, column: 65, offset: 276 },
            indent: [],
          },
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'bold',
                  children: [
                    {
                      type: 'text',
                      value: 'Actively',
                      position: {
                        start: { line: 9, column: 6, offset: 282 },
                        end: { line: 9, column: 14, offset: 290 },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: { line: 9, column: 4, offset: 280 },
                    end: { line: 9, column: 16, offset: 292 },
                    indent: [],
                  },
                },
                {
                  type: 'text',
                  value: ' maintained',
                  position: {
                    start: { line: 9, column: 16, offset: 292 },
                    end: { line: 9, column: 27, offset: 303 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 9, column: 4, offset: 280 },
                end: { line: 9, column: 27, offset: 303 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 9, column: 1, offset: 277 },
            end: { line: 9, column: 27, offset: 303 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 7, column: 1, offset: 169 },
        end: { line: 9, column: 27, offset: 303 },
        indent: [1, 1],
      },
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Apple',
                  position: {
                    start: { line: 11, column: 3, offset: 307 },
                    end: { line: 11, column: 8, offset: 312 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 11, column: 3, offset: 307 },
                end: { line: 11, column: 8, offset: 312 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 11, column: 1, offset: 305 },
            end: { line: 11, column: 8, offset: 312 },
            indent: [],
          },
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Kiwi',
                  position: {
                    start: { line: 12, column: 3, offset: 315 },
                    end: { line: 12, column: 7, offset: 319 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 12, column: 3, offset: 315 },
                end: { line: 12, column: 7, offset: 319 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 12, column: 1, offset: 313 },
            end: { line: 12, column: 7, offset: 319 },
            indent: [],
          },
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Strawberry',
                  position: {
                    start: { line: 13, column: 3, offset: 322 },
                    end: { line: 13, column: 13, offset: 332 },
                    indent: [],
                  },
                },
              ],
              position: {
                start: { line: 13, column: 3, offset: 322 },
                end: { line: 13, column: 13, offset: 332 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 13, column: 1, offset: 320 },
            end: { line: 13, column: 13, offset: 332 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 11, column: 1, offset: 305 },
        end: { line: 13, column: 13, offset: 332 },
        indent: [1, 1],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Check out ',
          position: {
            start: { line: 15, column: 1, offset: 334 },
            end: { line: 15, column: 11, offset: 344 },
            indent: [],
          },
        },
        {
          type: 'link',
          title: null,
          url: 'https://jackhanford.com',
          children: [
            {
              type: 'text',
              value: 'my website',
              position: {
                start: { line: 15, column: 12, offset: 345 },
                end: { line: 15, column: 22, offset: 355 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 15, column: 11, offset: 344 },
            end: { line: 15, column: 48, offset: 381 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 15, column: 1, offset: 334 },
        end: { line: 15, column: 48, offset: 381 },
        indent: [],
      },
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Always bet on javascript',
              position: {
                start: { line: 17, column: 3, offset: 385 },
                end: { line: 17, column: 27, offset: 409 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 17, column: 3, offset: 385 },
            end: { line: 17, column: 27, offset: 409 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 17, column: 1, offset: 383 },
        end: { line: 17, column: 27, offset: 409 },
        indent: [],
      },
    },
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 18, column: 1, offset: 410 },
  },
};
