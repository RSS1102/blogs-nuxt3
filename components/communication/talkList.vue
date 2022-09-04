<template>
    <div class="talk-list">
        <img src="/img/avatar.jpg" />
        <div class="interflow">
            <div class="interflow-info">
                <NEllipsis class="name">这是姓名这是姓名</NEllipsis>
                <span class="time">2020-21-15 14:14:10</span>
            </div>
            <div class="interflow-msg">123</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {NEllipsis} from 'naive-ui'

</script>

<style lang="scss" scoped>
.talk-list {
    display: flex;
    align-items: center;

    img {
        width: 60px;
        border-radius: 50%;
        margin: 0 20px;
    }

    .interflow {
        div {
            margin: 2px;
        }

        span {
            margin: 0 10px;
        }

        .interflow-info {
            font-size: 16px;

            .name {
                width: 150px;
                font-weight: bold;
            }

            .time {
                color: rgb(90, 85, 85);
                font-size: 14px;
            }
        }
    }
}
</style>
