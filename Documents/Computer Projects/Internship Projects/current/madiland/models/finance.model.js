module.exports = (sequelize_config, sequelize) => {
    const _student = require("./student.model");
    const finance = sequelize_config.define("finance",
        {
            finance_id: { 
                type: sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true 
            },
            student_id: {
                type: sequelize.INTEGER,
                allowNull: false,
                reference: {
                    model: _student,
                    key: 'student_id'
                }
            },
            school_fees: {
                type: sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            defaultScope: {
                attributes: {
                    exclude: ['finance_id', 'createdAt','updatedAt', 'student_id' ]
                }
            }
        }
    );

    return finance;
}