'use strict';

/**
 * Artist.js controller
 *
 * @description: A set of functions called "actions" for managing `Artist`.
 */

module.exports = {

  /**
   * Retrieve artist records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.artist.search(ctx.query);
    } else {
      return strapi.services.artist.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a artist record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.artist.fetch(ctx.params);
  },

  /**
   * Count artist records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.artist.count(ctx.query);
  },

  /**
   * Create a/an artist record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.artist.add(ctx.request.body);
  },

  /**
   * Update a/an artist record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.artist.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an artist record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.artist.remove(ctx.params);
  }
};
