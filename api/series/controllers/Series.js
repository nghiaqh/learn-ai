'use strict';

/**
 * Series.js controller
 *
 * @description: A set of functions called "actions" for managing `Series`.
 */

module.exports = {

  /**
   * Retrieve series records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.series.search(ctx.query);
    } else {
      return strapi.services.series.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a series record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.series.fetch(ctx.params);
  },

  /**
   * Count series records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.series.count(ctx.query);
  },

  /**
   * Create a/an series record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.series.add(ctx.request.body);
  },

  /**
   * Update a/an series record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.series.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an series record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.series.remove(ctx.params);
  }
};
