export default {
  editor: {
    label: {
      en: 'Masonry Wall',
    },
    icon: 'view-grid',
  },
  properties: {
    // ============================================
    // ITEMS DATA
    // ============================================
    items: {
      label: { en: 'Items' },
      type: 'Array',
      section: 'settings',
      bindable: true,
      defaultValue: [
        { id: 'item1' },
        { id: 'item2' },
        { id: 'item3' },
      ],
      options: {
        expandable: true,
        getItemLabel(item, index) {
          return item?.id || item?.title || `Item ${index + 1}`
        },
        item: {
          type: 'Object',
          defaultValue: { id: '' },
          options: {
            item: {
              id: { label: { en: 'ID' }, type: 'Text' },
            },
          },
        },
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'Array of objects to display in the masonry grid',
      },
      /* wwEditor:end */
    },

    // Item content dropzone (repeatable for each item)
    itemContent: {
      hidden: true,
      defaultValue: [],
      bindable: 'repeatable',
    },

    // ============================================
    // LAYOUT SETTINGS
    // ============================================
    columnWidth: {
      label: { en: 'Column Width' },
      type: 'Number',
      section: 'settings',
      bindable: true,
      defaultValue: 300,
      options: {
        min: 50,
        max: 1000,
        step: 10,
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Minimum column width in pixels (50-1000)',
      },
      propertyHelp: {
        tooltip: 'Minimum width for each column. Columns will expand to fill available space.',
      },
      /* wwEditor:end */
    },
    gap: {
      label: { en: 'Gap' },
      type: 'Number',
      section: 'settings',
      bindable: true,
      defaultValue: 16,
      options: {
        min: 0,
        max: 100,
        step: 1,
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Gap between items in pixels (0-100)',
      },
      propertyHelp: {
        tooltip: 'Space between masonry items in pixels.',
      },
      /* wwEditor:end */
    },
  },
}
