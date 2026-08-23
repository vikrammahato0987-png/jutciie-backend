import type { Schema, Struct } from '@strapi/strapi';

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'Timeline Item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    year: Schema.Attribute.String;
  };
}

export interface SharedWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_items';
  info: {
    displayName: 'why-choose-item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.timeline-item': SharedTimelineItem;
      'shared.why-choose-item': SharedWhyChooseItem;
    }
  }
}
