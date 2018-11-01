'use strict';

/**
 * Volume.js controller
 *
 * @description: A set of functions called "actions" for managing `Volume`.
 */

module.exports = {

  /**
   * Retrieve volume records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.volume.search(ctx.query);
    } else {
      return strapi.services.volume.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a volume record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.volume.fetch(ctx.params);
  },

  /**
   * Count volume records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.volume.count(ctx.query);
  },

  /**
   * Create a/an volume record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.volume.add(ctx.request.body);
  },

  /**
   * Update a/an volume record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.volume.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an volume record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.volume.remove(ctx.params);
  }
};
