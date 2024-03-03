import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { useTranslate } from "@refinedev/core";

import {
    DailyOrders,
    DailyRevenue,
    DeliveryMap,
    NewCustomers,
    OrderTimeline,
    RecentOrders,
    TrendingMenu,
} from "../../components/dashboard";

export const DashboardPage: React.FC = () => {
    const t = useTranslate();

    return (
        <Grid container columns={24} spacing={2}>
            <Grid item xs={24} sm={24} md={24} lg={24} xl={10}>
                <Card>
                    <DailyRevenue />
                </Card>
            </Grid>
            <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
                <Card>
                    <DailyOrders />
                </Card>
            </Grid>
            <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
                <Card>
                    <NewCustomers />
                </Card>
            </Grid>
            <Grid item xs={24} md={16} xl={24} className="flex items-center">
                <Card
                    sx={{
                        height: "100%",
                        minHeight: "600px",
                    }}
                >
                    <CardHeader
                        sx={{
                            paddingX: { xs: 4 },
                        }}
                        title={t("dashboard.deliveryMap.title")}
                    />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.8265168452172!2d106.6763218263865!3d10.822111583571191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752987b208571b%3A0xe89975802d7eaae6!2sShop%20Betta%20And%20Love!5e0!3m2!1sen!2s!4v1709484142583!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        loading="lazy"

                        style={{ border: 0 }} // To remove the border around the iframe
                    />
                </Card>
            </Grid>
            {/* <Grid item xs={24} md={8} xl={6}>
                <Card
                    sx={{
                        paddingX: { xs: 2 },
                        fontSize: { xs: "16px" },
                    }}
                >
                    <CardHeader title={t("dashboard.timeline.title")} />
                    <OrderTimeline />
                </Card>
            </Grid> */}
            {/* <Grid item xs={24} lg={16} xl={18}>
                <Card sx={{ height: "100%", paddingX: { xs: 2 } }}>
                    <CardHeader title={t("dashboard.recentOrders.title")} />
                    <RecentOrders />
                </Card>
            </Grid>
            <Grid item xs={24} lg={8} xl={6}>
                <Card
                    sx={{
                        height: "100%",
                        paddingX: { xs: 2 },
                    }}
                >
                    <CardHeader title={t("dashboard.trendingMenus.title")} />
                    <TrendingMenu />
                </Card>
            </Grid> */}
        </Grid>
    );
};
