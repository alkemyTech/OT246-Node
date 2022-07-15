const { Role } = require('../models/role');

const RoleController = {
    createRole: async(req, res) => {
        const { name, description = null } = req.params;

        try {
            const role = await Role.create({ name, description });

            res.json({ role });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    getRoles: async(req, res) => {
        try {
            const roles = await Role.findAll();

            res.json({
                roles
            })
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    getRoleById: async(req, res) => {
        const { id } = req.params;
        try {
            const role = await Role.findOne({ where: { id_role: id } });

            res.json({ role });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    updateRole: async(req, res) => {
        const { id } = req.params;
        const { name, description } = req.body;
        try {

            const role = await Role.findOne({ where: { id_role: id } });

            await role.update({
                name,
                description
            });

            res.json({ role });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    deleteRole: async(req, res) => {
        const { id } = req.params;
        try {
            const roleDeleted = await Role.destroy({ where: { id_role: id } });

            res.json({ roleDeleted });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

module.exports = RoleController;