<template>
    <div class="fill-container">
        <div class="search-view">
            <el-input 
             size="small" 
             v-model="searchValue" 
             placeholder="请输入搜索内容">
            </el-input>
            <el-button
             type="primary" 
             size="small" 
             icon="view" 
             @click="handleSearch()" 
             title="搜索">搜索
            </el-button>
        </div>
        <div class="add-div">
            <el-form :inline="true" ref="add_data">
                <el-form-item class="btn-right">
                    <el-button
                     type="primary"
                     size="medium" 
                     icon="view" 
                     @click="handleAdd()">
                        添加
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table-container">
            <el-table
            :data="tableData"
            max-height="320"
            border
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column
                label="序号"
                :sortable="true"
                type="index"
                width="50"
                align="center">
                </el-table-column>
                <el-table-column
                label="创建时间"
                prop="date"
                width="125"
                align="center">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="收支类型"
                prop="type"
                width="130"
                align="center">
                </el-table-column>
                <el-table-column
                label="收支描述"
                prop="describe"
                width="110"
                align="center">
                </el-table-column>
                <el-table-column
                label="收入"
                prop="income"
                width="110"
                align="center">
                    <template slot-scope="scope">
                        <span style="color: #00d053">{{ scope.row.income }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="支出"
                prop="expend"
                width="110"
                align="center">
                    <template slot-scope="scope">
                        <span style="color: #f56767">{{ scope.row.expend }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="账户现金"
                prop="cash"
                width="110"
                align="center">
                    <template slot-scope="scope">
                        <span style="color: #4db3ff">{{ scope.row.cash }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="备注"
                prop="remark"
                width="180"
                align="center">
                </el-table-column>
                <el-table-column
                label="操作"
                align="center"
                width="155"
                prop="operation">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="warning"
                        icon="edit"
                        @click="handleEdit(scope.$index, scope.row)">
                        编辑
                        </el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        icon="delete"
                        @click="handleDelete(scope.$index, scope.row)">
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-row>
                <el-col :span="24">
                    <div class="pagination">
                        <el-pagination
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page.sync="pagination.currentPage"
                         :page-sizes="pagination.pageSizes"
                         :page-size="pagination.pageSize"
                         :layout="pagination.layout"
                         :total="pagination.total">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
        <Dialog :formData="formData" :dialog="dialog" @submit="handleSubmit"></Dialog>
        <div class="deleteDialog">
            <el-dialog
             title="确认删除"
             :visible.sync="dialogVisible"
             width="30%">
                <span>请确认是否删除该数据?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false;deleteRowIndex=-1">取 消</el-button>
                    <el-button type="primary" @click="handleClose()">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
 
</template>


<script>
import Dialog from '../components/Dialog'
export default {
    name: 'fundlist',
    data(){
        return {
            allTableData: [],
            tableData: [],
            dialog: {
                show: false,
                dialogTitle: ''
            },
            dialogVisible: false,
            deleteRowIndex: -1,
            searchValue: '',
            formData:{
                type: '',
                describe: '',
                income: '',
                expend: '',
                cash: '',
                remark: '',
                id: ''
            },
            pagination: {
                currentPage: 1, //当前位于哪页
                total: 0, //总条数
                pageSize: 5, //一页显示的条数
                pageSizes: [5, 10, 15, 20], //每页显示多少条
                layout: "total, sizes, prev, pager, next, jumper" //翻页属性
            }
        }
    },
    created(){
        this.getProfile();
    },
    components: {
        Dialog
    },
    methods:{
        getProfile(){
            const baseURL = "https://www.easy-mock.com/mock/5bc7014ed85ce204b23a8f4d/vn/user/fundlist";
            this.$axios.get(baseURL)
            .then(res => {
                const { fundlist } = res.data;
                const funddata = JSON.parse(fundlist);
                this.allTableData = funddata;
                //设置分页数据
                this.setPagination();
            })
            .catch(err =>console.log(err));
        },
        handleEdit(index, row){
            this.dialog.show = true;
            this.dialog.dialogTitle = "修改";
            const editData = this.allTableData[index];
            this.formData = JSON.parse(JSON.stringify(editData));
        },
        handleDelete(index, row){
            this.dialogVisible = true;
            this.deleteRowIndex = index; 
        },
        handleAdd(){
            this.dialog.show = true;
            this.dialog.dialogTitle = "添加";

        },
        handleSubmit(){
            if(this.formData.id!==""){
                const date = this.$moment().format('YYYY-MM-DD');
                this.formData.date = date;
                this.allTableData.splice(parseInt(this.formData.id)-1,1,JSON.parse(JSON.stringify(this.formData)));
                this.$message({
                    message: '修改成功!',
                    type:'success'
                });
                
            }
            else{
                this.formData.id = this.allTableData.length + 1 + "";
                const date = this.$moment().format('YYYY-MM-DD');
                this.formData.date = date;
                this.allTableData.push(JSON.parse(JSON.stringify(this.formData)));
                this.$message({
                    message: '添加成功!',
                    type:'success'
                });
            }
            Object.keys(this.formData).forEach(key=>{
                this.formData[key]="";
            });
            
        },
        handleClose(){
            if(this.deleteRowIndex!=-1)this.allTableData.splice(this.deleteRowIndex,1);
            this.deleteRowIndex = -1;
            this.dialogVisible = false;
            this.$message({
                    message: '删除成功!',
                    type:'success'
                });
        },
        handleSizeChange(pageSize){
            // this.pagination.currentPage = 1;
            // this.pagination.pageSize = pageSize;
            // console.log(this.allTableData.length);
            // this.tableData = this.allTableData.filter((item,index)=>{
            //     return index < this.pagination.pageSize;
            // });
        },
        handleCurrentChange(currentPage){

        },
        setPagination(){
            //分页属性设置
            this.pagination.total = this.allTableData.length;
            //设置当前页数
            this.pagination.currentPage = 1;
            //设置一页显示多少条
            this.pagination.pageSize = 5;
            //设置分页数据
            this.tableData = this.allTableData.filter((item,index)=>{
                return index < this.pagination.pageSize;
            });
        },
        handleSearch(){

        }


    }
};
</script>

<style scoped>
.fill-container{
    width: 85%;
    height: 100%;
    padding-top: 15px;
    padding-left: 5px;
    box-sizing: border-box;
    overflow: hidden;
}
.add-div{
    width: 100px;
    height: 30px;
    border: 1px solid black;
    overflow: hidden;
    text-align: center;
    float: right;
}
.btn-right{
    float: left;
}
.deleteDialog{
    text-align: left;
}
.pagination{
    text-align: right;
    margin: 10px;
}
.search-view{
    width: 30%;
    display: inline-block;
    text-align: left;
}
.el-input{   
    width: 50%;
}
.el-button{
    left: 15%;
    width: 15%;
}
</style>


