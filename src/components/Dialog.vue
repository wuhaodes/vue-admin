<template>
    <div class="addDialog">
        <el-dialog
          :title="dialog.dialogTitle+'资金流水'"
          :visible.sync="dialog.show"
          :close-on-click-modal="false"
          :append-to-body="false">
        <div class="form">
            <el-form ref="form"
             :model="formData"
             :rules="form_rules"
             label-width="120px"
             style="margin:10px;width:auto">
                <el-form-item
                 label="收支类型:">
                    <el-select v-model="formData.type" placeholder="收支类型">
                        <el-option
                         v-for="(formtype,index) in format_type_list" 
                         :key="index"
                         :value="formtype"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                 prop="describe"
                 label="收支描述:">
                    <el-input type="describe" v-model="formData.describe">
                    </el-input>
                </el-form-item>
                <el-form-item
                 prop="income"
                 label="收入:">
                    <el-input type="income" v-model="formData.income">
                    </el-input>
                </el-form-item>
                <el-form-item
                 prop="expend"
                 label="支出:">
                    <el-input type="expend" v-model="formData.expend">
                    </el-input>
                </el-form-item>
                <el-form-item
                 prop="cash"
                 label="现金:">
                    <el-input type="cash" v-model="formData.cash">
                    </el-input>
                </el-form-item>
                <el-form-item
                 prop="remark"
                 label="备注:">
                    <el-input type="remark" v-model="formData.remark">
                    </el-input>
                </el-form-item>
                <el-form-item class="text-right">
                    <el-button @click="dialog.show=false">取消</el-button>
                    <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    name: 'Dialog',
    data(){
        return {
            format_type_list:[
                "提现",
                "提现手续费",
                "充值",
                "优惠券",
                "充值礼券",
                "转账"
            ],
            form_rules: {
                describe:[
                    {required: true, message: "收支描述不能为空", trigger:"blur"}
                ],
                income:[
                    {required: true, message: "收入不能为空", trigger:"blur"}
                ],
                expend:[
                    {required: true, message: "支出不能为空", trigger:"blur"}
                ],
                cash:[
                    {required: true, message: "现金不能为空", trigger:"blur"}
                ],
                remark:[
                    {required: true, message: "备注不能为空", trigger:"blur"},
                ]
            }

        }
    },
    props:{
        dialog: Object,
        formData: Object
    },
    methods:{
        onSubmit(form){
            this.$refs[form].validate(valid=>{
                if(valid){
                    this.$emit("submit");
                    this.dialog.show = false;
                }
            });
        }
    }
};
</script>

<style scoped>
.addDialog{
    text-align: left;
}
</style>


