const { Testimonials } = require('../models');

class TestimonialsController {
  static async getTestimonials(req, res) {
    try {
      const testimonials = await Testimonials.findAll({
        where: {
          deletedAt: null,
        },
      });
      return res.status(200).json({ testimonials });
    } catch (err) {
      return res.status(500).json({
        message: 'Failed to retrieve all testimonials',
        error: err,
      });
    }
  }

  static async getOneTestimonial(req, res) {
    const { id } = req.params;
    const testimonial = await Testimonials.findByPk(id);
    if (!testimonial) {
      return res.status(500).json({
        message: 'Failed to retrieve testimonial',
      });
    }
    return res.status(200).json({
      testimonial,
    });
  }
  static async createTestimonial(req, res) {
    const { name, content = null, image = null } = req.body;
    try {
      const testimonial = await Testimonials.create({
        name,
        content,
        image,
      });
      return res.status(201).json({
        testimonial,
      });
    } catch (err) {
      console.error(err);
    }
  }
  static async updateTestimonial(req, res) {
    const { id } = req.params;
    const { name, content, image} = req.body;
    try {
        const testimonial = await Testimonials.findByPk(id);
        if (!testimonial) {
            return res.status(404).json({
                message: 'Failed to find testimonial',
            });
        }
        await testimonial.update({
            name,
            content,
            image,
        });
        return res.status(200).json({
            testimonial,
        });
    } catch (err) {
       return res.status(500).json({message: 'Error at update'});
    }
    }

  static async deleteTestimonial(req, res) {
    const { id } = req.params;
    try {
      const testimonialDelete = await Testimonials.destroy({ where: id });
      return res.status(200).json({ message: 'Testimonial has been deleted' });
    } catch (err) {
      return res
        .status(404)
        .son({ message: 'Failed to delete testimonial', error: err });
    }
  }
}

module.exports = TestimonialsController;
