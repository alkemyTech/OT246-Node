const { Member } = require('../models/members');

const RoleController = {
    createMember: async(req, res) => {
        const {
            name,
            description = null,
            facebookUrl = null,
            instagramUrl = null,
            linkedinUrl = null,
            image
        } = req.params;

        try {
            const member = await Member.create({ name, description, facebookUrl, instagramUrl, linkedinUrl, image });

            res.json({ member });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    getMembers: async(req, res) => {
        try {
            const members = await Member.findAll({ where: { deletedAt: null } });

            res.json({
                members
            })
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    getMemberById: async(req, res) => {
        const { id } = req.params;
        try {
            const member = await Member.findOne({ where: id });

            res.json({ member });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    updateMember: async(req, res) => {
        const { id } = req.params;
        const {
            name,
            description,
            facebookUrl,
            instagramUrl,
            linkedinUrl
        } = req.body;
        try {

            const member = await Member.findOne({ where: id });

            await member.update({
                name,
                description,
                facebookUrl,
                instagramUrl,
                linkedinUrl
            });

            res.json({ member });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    deleteMember: async(req, res) => {
        const { id } = req.params;
        try {
            const memberDeleted = await Member.destroy({ where: id });

            res.json({ memberDeleted });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

module.exports = RoleController;