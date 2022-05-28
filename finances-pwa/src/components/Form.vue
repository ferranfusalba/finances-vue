<template>
    <div>
        <div class="sample">
            <cv-form @submit.prevent="actionSubmit">
                <cv-text-input
                    v-model="values.email"
                    label="Email"
                    helper-text=""
                    invalid-message=""
                    placeholder="Enter Email">
                    <template v-if="errors.email" slot="invalid-message">Empty or Incorrect email</template>
                </cv-text-input>
                <cv-text-input
                    v-model="values.name"
                    label="Name"
                    helper-text=""
                    placeholder="Enter Name">
                </cv-text-input>
                <cv-text-area
                    label="Example text label"
                    helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                    placeholder="Optional placeholder text">
                </cv-text-area>
                <cv-select label="Example select label">
                    <cv-select-option disabled selected hidden>Choose an option</cv-select-option>
                    <cv-select-optgroup label="Category 1">
                        <cv-select-option value="cv-select-option1">cv-select-option 1</cv-select-option>
                        <cv-select-option value="cv-select-option2">cv-select-option 2</cv-select-option>
                    </cv-select-optgroup>
                    <cv-select-optgroup label="Category 2">
                        <cv-select-option value="cv-select-option3">cv-select-option 3</cv-select-option>
                        <cv-select-option value="cv-select-option4">cv-select-option 4</cv-select-option>
                    </cv-select-optgroup>
                </cv-select>
                <cv-button>Submit</cv-button>
            </cv-form>
        </div>
        <dds-footer-container size="short"></dds-footer-container>
    </div>
</template>

<script>
    import { schema } from '../schema';
    export default {
        name: 'Form',
        data() {
            return {
                // email: '',
                // name:'',
                visible: false,
                errors: {},
                values: {
                    "email":"",
                    // "applicationName":"",
                    // "applicationVersion":"",
                    "name":""
                }
            };
        },
        methods: {
            async actionSubmit() {
                try {
                    await schema.validate(this.values, { abortEarly: false });
                    alert(JSON.stringify(this.values, null, 2));
                    this.errors = {};
                } catch (err) {
                    this.errors = err.inner.reduce((acc, err) => {
                        console.log('[err.message]', err.message)
                        return { ...acc, [err.path]: err.message };
                    }, {});
                }
                // alert(this.email)
            },
        //   modalClosed() {
        //     this.visible = false;
        //   },
        },
    };
</script>

<style>
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }

  /* .cv-text-input {
    margin: 30px 0;
  } */
</style>