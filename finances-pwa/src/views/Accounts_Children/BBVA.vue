<template>
  <div>
    <Label label="BBVA" />
    <cv-modal ref="mobileModal" close-aria-label="Close" size="xs">
      <template v-if="use_label" slot="label">Label of modal</template>
      <template v-if="use_title" slot="title">Add a transaction</template>
      <template v-if="use_content" slot="content"
        ><p>
          Soon!
        </p></template
      >
    </cv-modal>
    <cv-button kind="tertiary" @click="openModal">
      Add Transaction
    </cv-button>
    <cv-data-table
      :columns="columns"
      :pagination="basicPagination"
      :has-expand-all="hasExpandAll"
      ref="table"
      :sortable="sortable"
    >
      <template v-if="use_expandingSlottedData" slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in data"
          :key="`${rowIndex}`"
          :value="`${rowIndex}`"
          :expanded="rowIndex === rowExpanded"
          aria-label-expand-row="Go large"
          aria-label-collapse-row="Go small"
        >
          <!-- <cv-data-table-cell
            v-for="(cell, cellIndex) in row"
            :key="`${cellIndex}`"
            :value="`${cellIndex}`"
            v-html="cell"
          >
          </cv-data-table-cell> -->
          <cv-data-table-cell> {{ row.date }} </cv-data-table-cell>
          <cv-data-table-cell> {{ row.name }} </cv-data-table-cell>
          <cv-data-table-cell> {{ row.amount }} </cv-data-table-cell>
          <cv-data-table-cell> {{ row.balance }} </cv-data-table-cell>
          <cv-data-table-cell
            ><cv-tag kind="red" :label="row.category" />
          </cv-data-table-cell>
          <cv-data-table-cell>
            <cv-overflow-menu flip-menu style="margin: 0 auto">
              <cv-overflow-menu-item>Edit</cv-overflow-menu-item>
              <cv-overflow-menu-item kind="danger">Delete</cv-overflow-menu-item>
            </cv-overflow-menu>
          </cv-data-table-cell>
          <template slot="expandedContent"
            ><small>Reference:</small>
            <br>
            <small>Transaction Type:</small>
            <br>
            <small>Amount in Foreign Currency:</small>
            <br>
            <small>Type of Foreign Currency:</small>
            <br>
            <small>Exchange Rate:</small>
            <br>
            <small>Observations:</small>
          </template>
        </cv-data-table-row>
      </template></cv-data-table
    >
  </div>
</template>

<script>
import Label from "../../components/Label.vue";
import { CvModal } from "@carbon/vue/src/components/cv-modal";

export default {
  name: "BBVA",
  components: {
    Label,
    CvModal,
  },
  methods: {
    openModal() {
      this.$refs.mobileModal.show();
    },
  },
  data() {
    return {
      // Modal
      use_label: false,
      use_title: true,
      use_content: true,
      visible: false,
      autoHideOff: false,
      "sortable": true,
      // Table
      columns: ["Date", "Payee", "Amount", "Balance", "Category", "Options"],
      data: [
        {
          date: "27/06/22",
          name: "Parking Pizza Londres",
          amount: "11,95 €",
          balance: "0,05 €",
          category: "Restaurants",
          options: "Select",
        },
        {
          date: "26/06/22",
          name: "Syra Coffee Londres",
          amount: "3,50 €",
          balance: "12,00 €",
          category: "Coffee Shops",
          options: "Select",
        } /*
        [
          "Load Balancer 2",
          "HTTP",
          "82",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 3",
          "HTTP",
          "8080",
          "Round Robin",
          "Maureen’s VM Groups",
          "Offline",
        ],
        [
          "Load Balancer 5",
          "HTTP",
          "8001",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 11",
          "HTTP",
          "10",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 24",
          "HTTP",
          "11",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 22",
          "HTTP",
          "12",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 23",
          "HTTP",
          "1080",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 25",
          "HTTP",
          "1001",
          "Round Robin",
          "Max’s VM Groups",
          "Failed",
        ],
        [
          "Load Balancer 311",
          "HTTP",
          "280",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 324",
          "HTTP",
          "281",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 322",
          "HTTP",
          "282",
          "Round Robin",
          "John’s VM Groups",
          "Offline",
        ],
        [
          "Load Balancer 323",
          "HTTP",
          "2080",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 325",
          "HTTP",
          "2001",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ], */,
      ],
      basicPagination: false,
      use_expandingSlottedData: true,
      rowExpanded: -1,
      hasExpandAll: false,
    };
  },
};
</script>
